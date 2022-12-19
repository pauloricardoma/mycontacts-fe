class CategoryMapper {
  toPersistence(domainCategory) {
    return {
      name: domainCategory.name,
    };
  }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
