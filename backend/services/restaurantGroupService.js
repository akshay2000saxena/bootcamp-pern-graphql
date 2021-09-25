/**
 * db is our data access object, an abstraction layer on top of our PostgreSQL database
 * the ORM (object-relational mapper) that we are using is Sequelize
 */
import db from "../models/index";


/**
 * while our business logic is really simple so far, it is beneficial to keep it apart from the resolver logic
 * separation of concerns leads to maintainable code as the application grows, and also makes the code easier to unit test
 */

async function getRestaurantGroup(id) {
    /**
     * Restaurant is a Sequelize model, so we can use Sequelize methods like findByPk (find by primary key)
     * view the Sequelize v6 docs at https://sequelize.org/master/index.html for more available methods
     */
    return await db.RestaurantGroup.findByPk(id);
}

async function createRestaurantGroup(name, description, restaurants) {
    return await db.RestaurantGroup.create({
        name,
        description,
        restaurants
    });
}

const restaurantGroupService = { getRestaurantGroup, createRestaurantGroup };
export default restaurantGroupService;
