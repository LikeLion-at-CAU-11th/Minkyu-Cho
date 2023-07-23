import { atom } from "recoil";

export const userNameAtom = atom({
  key: "userName",
  default: "홍길동",
});

export const emailAtom = atom({
  key: "email",
  default: "@@@",
});

export const rangeAtom = atom({
  key: "range",
  default: "",
});

export const isSubmittedAtom = atom({
  key: "isSubmitted",
  default: false,
});
