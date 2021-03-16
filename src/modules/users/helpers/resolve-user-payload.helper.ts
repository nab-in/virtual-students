const userRelationMapper = {
  comments: 'userreplies',
};

export const userDTOResolver = async (
  createUserDTO: { [x: string]: any },
  repository: { manager: { query: (arg0: string) => any } },
) => {
  const newUserDTO = {};
  let values;
  let comments: [{ id: number }];
  Object.keys(createUserDTO).forEach((key) => {
    newUserDTO[key] = createUserDTO[key];
  });
  for (const key of Object.keys(createUserDTO)) {
    if (
      userRelationMapper[key] &&
      typeof createUserDTO[key] !== 'object' &&
      !Array.isArray(createUserDTO[key])
    ) {
      const query = `SELECT id FROM ${userRelationMapper[key]} WHERE uid='${createUserDTO[key]}' LIMIT 1;`;
      const entity = await repository.manager.query(query);
      newUserDTO[key] = entity[0];
    }
    if (
      userRelationMapper[key] &&
      typeof createUserDTO[key] == 'object' &&
      !Array.isArray(createUserDTO[key])
    ) {
      if (createUserDTO[key]['id']) {
        const query = `SELECT id FROM ${userRelationMapper[key]} WHERE uid='${createUserDTO[key]['id']}' LIMIT 1;`;
        const entity = await repository.manager.query(query);
        newUserDTO[key] = entity[0];
      }
      if (userRelationMapper[key] && Array.isArray(createUserDTO[key])) {
        for (const value of createUserDTO[key]) {
          values = await userDTOResolver(value, repository);
          comments.push(values);
          const vals = comments;
          newUserDTO[key] = vals;
        }
      }
    }
    return newUserDTO;
  }
};
