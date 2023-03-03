import { format, formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";
import { Tooltip } from "antd";

export const TimeDistance = ({ date }: { date: Date }) => {
  const distance = formatDistanceToNow(date, {
    addSuffix: true,
    locale: pl,
  });

  return (
    <Tooltip title={format(date, "dd MMMM yyyy", { locale: pl })}>
      {distance}
    </Tooltip>
  );
};
