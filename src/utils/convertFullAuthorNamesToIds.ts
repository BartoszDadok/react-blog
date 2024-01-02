type Author = {
  userId: number;
  name: string;
};
export const convertFullAuthorNamesToIds = (
  authorFullNames: string[],
  fakeAuthorsArray: Author[]
) => {
  const authorsIDs = [] as number[];

  authorFullNames.forEach((authorFullName) => {
    const foundAuthor = fakeAuthorsArray.find((fakeAuthor) => {
      return fakeAuthor.name === authorFullName;
    });

    if (foundAuthor) {
      authorsIDs.push(foundAuthor.userId);
    }
  });

  return authorsIDs;
};
