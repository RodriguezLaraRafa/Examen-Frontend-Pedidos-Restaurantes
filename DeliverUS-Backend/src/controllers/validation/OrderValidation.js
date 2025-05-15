import { check } from 'express-validator'

// TODO: Include validation rules for create that should:
// 1. Check that restaurantId is present in the body and corresponds to an existing restaurant
// 2. Check that products is a non-empty array composed of objects with productId and quantity greater than 0
// 3. Check that products are available
// 4. Check that all the products belong to the same restaurant
const create = [

]
// TODO: Include validation rules for update that should:
// 1. Check that restaurantId is NOT present in the body.
// 2. Check that products is a non-empty array composed of objects with productId and quantity greater than 0
// 3. Check that products are available
// 4. Check that all the products belong to the same restaurant of the originally saved order that is being edited.
// 5. Check that the order is in the 'pending' state.
const update = [

]

const updateByOwner = [
  check('address').notEmpty().withMessage('Address is required')
    .isString().withMessage('Address must be a string')
    .isLength({ max: 255 }).withMessage('Address is too long'),

  check('price').notEmpty().withMessage('Price is required')
    .isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0')
]

export { create, update, updateByOwner }
