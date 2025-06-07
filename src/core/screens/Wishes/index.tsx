"use client";

import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import toast from "react-hot-toast";
import WishesService from "@inv/lib/services/wishes/wishes.service";

import { motion } from "framer-motion";
import { Trash2Icon } from "lucide-react";
import useGlobalStore from "@inv/lib/stores/useGlobalStore";

dayjs.extend(relativeTime);

const WishesScreen: React.FC = () => {
  const { isAdmin } = useGlobalStore();
  const wishes = WishesService.GetWishes.useQuery();
  const createWish = WishesService.CreateWish.useMutation();
  const deleteWish = WishesService.DeleteWish.useMutation();
  const duration = 1.2;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as any;
    const [name, description] = target;

    if (
      !(
        !createWish.isPending &&
        !wishes.isFetching &&
        [name, description].every((e) => e.value)
      )
    ) {
      return;
    }

    createWish.mutate(
      [
        {
          name: name.value,
          description: description.value,
        },
      ],
      {
        onSuccess() {
          [name, description].forEach((e) => (e.value = null));
          toast.success("Wish added successfully!");
          wishes.refetch();
        },
        onError() {
          toast.error("Failed to add wish. Please try again.");
        },
      }
    );
  };
  const handleDeleteWish = (
    id: string
  ): React.MouseEventHandler<SVGSVGElement> => {
    return (e) => {
      e.preventDefault();

      deleteWish.mutate([id], {
        onSuccess() {
          toast.success("Wish deleted successfully!");
          wishes.refetch();
        },
        onError() {
          toast.error("Failed to delete wish. Please try again.");
        },
      });
    };
  };

  return (
    <section className="relative bg-[url('/images/couple-garden.jpg')] px-10 pb-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-[0.42] bg-linen"></div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration }}
        className="absolute z-20 -top-2 -right-38 rotate-[326deg]"
      >
        <Image
          src="/images/dera.png"
          alt="flower"
          width={210}
          height={0}
          className="h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        transition={{ duration }}
        className="absolute z-20 top-2 -left-38 rotate-[26deg] scale-x-[-1]"
      >
        <Image
          src="/images/dera.png"
          alt="flower"
          width={210}
          height={0}
          className="h-auto"
        />
      </motion.div>
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ translateY: -50 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="w-[76%]"
        >
          <Image
            src="/images/logo-nama.png"
            alt="logo-nama"
            width={180}
            height={0}
            className="w-full h-auto mt-2"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="font-vidaloka text-[35px] uppercase"
        >
          Best Wishes
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration }}
          className="text-xs font-caudex"
        >
          Sampaikan doa dan ucapan terbaik Anda
        </motion.div>
        <motion.form
          initial={{ translateY: 70 }}
          whileInView={{ translateY: 0 }}
          transition={{ duration }}
          className="w-full mt-6 bg-white rounded-lg overflow-hidden"
          onSubmit={handleSubmit}
        >
          <p className="py-3 text-sm text-center">
            {wishes.data?.length || 0} Comment
          </p>
          <hr />
          <div className="flex flex-col p-4 gap-3">
            <input type="text" name="name" id="name" placeholder="Nama" />
            <textarea
              name="description"
              id="description"
              placeholder="Ucapan"
            />
            <button className="button">Kirim</button>
          </div>
          <div className="max-h-[300px] py-2 overflow-scroll">
            {wishes.data?.map((w, i) => (
              <React.Fragment key={i}>
                {!i && <hr />}
                <div className="flex flex-col gap-1.5 p-4">
                  <p className="text-sm">
                    <b>{w.name}</b>
                  </p>
                  <p className="text-sm text-gray-600">{w.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-900">
                      {dayjs(w.createdAt).fromNow()}
                    </p>
                    {!!isAdmin && (
                      <Trash2Icon size={14} onClick={handleDeleteWish(w.id)} />
                    )}
                  </div>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default WishesScreen;
