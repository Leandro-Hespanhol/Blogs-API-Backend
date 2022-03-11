module.exports = (sequelize, DataTypes) => {
const categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allownull: false },
    name: DataTypes.STRING,
  }, {
    modelName: 'Categories',
    timestamps: false,
    underscored: false,
  });

  categories.associate = (models) => {
    categories.hasMany(models.PostCategory, { foreignKey: 'id', as: 'categoryId' });
  };

  return categories;
};