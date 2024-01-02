export const findAuthorFullName = (
  authorsArray: {
    userId: number;
    name: string;
  }[],
  authorId: number
) => {
  return authorsArray.find((author) => {
    return author.userId === authorId;
  });
};
