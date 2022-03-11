module.exports = (sequelize, DataTypes) => {
const Categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allownull: false },
    name: DataTypes.STRING,
  }, {
    modelName: 'Categories',
    timestamps: false,
    underscored: false,
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.PostsCategories, { foreignKey: 'id', as: 'categoryId' });
  };

  return Categories;
};