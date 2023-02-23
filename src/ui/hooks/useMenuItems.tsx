import { type MenuProps } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const useMenuItems = (): MenuProps["items"] => {
  const { status } = useSession();
  const { locale } = useRouter();

  if (status === "loading") {
    return [];
  }

  if (status === "unauthenticated") {
    return [
      {
        key: "login",
        label: (
          <Link href="" locale={locale}>
            Zaloguj
          </Link>
        ),
      },
    ];
  }

  return [
    {
      key: "dashboard",
      label: (
        <Link href="/dashboard" locale={locale}>
          Dashboard
        </Link>
      ),
    },
    {
      key: "actions",
      label: (
        <Link href="/action/list" locale={locale}>
          Akcje
        </Link>
      ),
    },
    {
      key: "new-action",
      label: (
        <Link href="/action/new" locale={locale}>
          Nowa akcja
        </Link>
      ),
    },
  ];
};
