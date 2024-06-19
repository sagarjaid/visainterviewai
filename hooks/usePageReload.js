import { useRouter } from "next/router";
export const usePageReload = () => {
  const router = useRouter();

  const reloadPage = () => {
    router.reload();
  };

  return reloadPage;
};
