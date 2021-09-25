/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurantGroup PostgreSQL table */
    const RestaurantGroup = sequelize.define("restaurantGroup", {
        /* sequelize automatically defines an id column as primary key */
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        restaurants: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
    },
    {
        timestamps: false
    });

    return RestaurantGroup;
}
