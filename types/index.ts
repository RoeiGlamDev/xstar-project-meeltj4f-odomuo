// FILE: types/index.ts

/
 * This file contains TypeScript types and interfaces for the luxury FashionTV cosmetics application.
 * It is designed to provide type safety and structure specific to the business requirements
 * of luxury FashionTV cosmetics, focusing on the fashion industry context.
 */

export type ColorTheme = 'pink' | 'white';

/
 * Interface representing a cosmetic product in the luxury FashionTV cosmetics collection.
 */
export interface CosmeticProduct {
  /
   * Unique identifier for the product.
   */
  id: string;

  /
   * Name of the cosmetic product.
   */
  name: string;

  /
   * Description of the cosmetic product, focusing on luxury and high-end details.
   */
  description: string;

  /
   * Price of the cosmetic product, formatted as a string for display purposes.
   */
  price: string;

  /
   * URL to the product image, must match luxury design standards.
   */
  imageUrl: string;

  /
   * Available color themes for the product.
   */
  colorTheme: ColorTheme;
}

/
 * Interface representing a category of cosmetic products.
 */
export interface ProductCategory {
  /
   * Unique identifier for the category.
   */
  id: string;

  /
   * Name of the category.
   */
  name: string;

  /
   * Collection of products under this category.
   */
  products: CosmeticProduct[];
}

/
 * Interface for the luxury FashionTV cosmetics brand's customer.
 */
export interface Customer {
  /
   * Unique identifier for the customer.
   */
  id: string;

  /
   * Full name of the customer.
   */
  fullName: string;

  /
   * Email address of the customer.
   */
  email: string;

  /
   * Preferred color theme of the customer.
   */
  preferredColorTheme: ColorTheme;
}

/
 * Interface representing an order made by a customer.
 */
export interface Order {
  /
   * Unique identifier for the order.
   */
  id: string;

  /
   * Customer who placed the order.
   */
  customer: Customer;

  /
   * List of products included in the order.
   */
  products: CosmeticProduct[];

  /
   * Total price of the order.
   */
  totalPrice: string;

  /
   * Status of the order, e.g., 'pending', 'shipped', 'delivered'.
   */
  status: 'pending' | 'shipped' | 'delivered';
}
