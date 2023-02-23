import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { pl } from "date-fns/locale";
import { Tooltip } from "antd";

export const useTimeDistance = (date: Date) => {
  const [distanceDate, setDistanceDate] = useState("");
  useEffect(() => {
    if (window) {
      setDistanceDate(
        formatDistanceToNow(date, {
          addSuffix: true,
          locale: pl,
        })
      );
    }
  }, [date]);

  return (
    <Tooltip title={format(date, "dd MMMM yyyy", { locale: pl })}>
      {distanceDate}
    </Tooltip>
  );
};
