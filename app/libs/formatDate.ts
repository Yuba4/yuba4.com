import dayjs from "dayjs";

export const formatDate = (dateString: string) => {
  return dayjs(dateString).format("YYYY-MM-DD");
};
