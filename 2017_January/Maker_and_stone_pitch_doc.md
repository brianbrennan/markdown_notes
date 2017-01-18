#Maker & Stone

##The Problem with Online Retail Today

Small business ecommerce has become a booming industry in the past few years. It is incredibly easy to set up a website that has a full store ready to go. Using platforms like Shopify seem to be an industry standard when it comes to setting up an online store. But this ease of use comes at a price. A large one. Shopify, for example, costs $79 a month for their mid-tier, on top of 2.6% + $0.30 transaction fees, and an additional 1% for using an external payment platform (which you're almost required to do in todays day and age). The lower tier is even worse, at $29 a month, but 2.9% + $0.30 and an addition 2% for external payments.

Then you have the issue of fulfillment. It costs a great deal of money to have a fulfillment process in place, to ensure that your product gets into the right hands in a reliable amount of time. Shipping costs for small businesses alone can cause huge issues. Not to mention the amount of time it would take without a proper staff to fulfill those requests. Success could become detrimental, if you receive more orders than you can fulfill. You also have to worry about things like returns, disputes, customs, postmarking, all things that take time.

Lastly is the issue of inventory. How exactly are you going to make your product? How are you going to store it? How much inventory are you going to have at any given time? Most drop shippers will allow you to keep inventory in their warehouse that you can then sell and distribute from, but this requires up front costs for dozens if not hundreds of units. And then you need to ensure that the stock for all of your SKUs are accurate, or risk overselling a product. Again, all of the above costs time and money.

##Why Maker & Stone is Different

Maker & Stone is built entirely on a custom platform, integrating several technologies to automate as much of payment and fulfillment as possible. Being driven by software first, it also has scalability as the bedrock of its codebase. We wanted to avoid all of the hassle that modern ecommerce entails, and use our web application to take care of all of the heavy lifting we would need. At the same time, we did not want to do any work that was unnecessary. The cheapest options for various micro-services were selected in order to ensure a cheap, but high quality level of inventory in our online story. Let's go through the software integrated with Maker & Stone.

##Payment through Stripe

Stripe is the heart of our online store. All transactions are processed via Stripe, all customer related information is saved in Stripe, and all products and SKU data is saved in Stripe. This allows us to have a hub of financial information. In a sense, our store really lives with Stripe. Most importantly, it allows us to securely handle financial requests for a nominal fee. If we were to directly touch credit card information at all, it would be a liability for us. Outsourcing such a delicate task to Stripe allows us to not have to worry about deal with transaction processing at all, including security. Stripe's fee is 2.9% + $0.30. Compared to Shopify's cut of up to 4.9% and $0.30, this is a huge saver. 

It's only a bonus that it adds on the ability to contain all of our store information in one easy to use service, and its a bonus that we integrate heavily into our technology stack in order to have the simplest datasets possible.

##Fulfillment through Printful

Printful is a fulfillment service that provides us with the ability to automatically send orders, have them printed, and finally shipped to our customers. Since our platform is built with this in mind, we can charge customers through Stripe, wait until their transaction has been accepted, and then send an order to Printful for fulfillment. Printful has extremely reasonably priced products that they allow you to specify designs for, and since our payments are processed beforehand, we can ensure a profit margin on every single transaction. For example, a standard American Apparel T-Shirt can cost $14, but we can specify it to be printed with a custom design, and sell it for $20, with only the Stripe transaction fee to worry about.

Since they handle shipping, they provide an easy to use API to allow us to calculate shipping costs on the fly, so that we can charge users accordingly depending on their location. Taxes can be calculated similarly, but this only applies to states in which Printful has a warehouse present (CA, and NC). Thus is the end of a standard transaction. We had no overhead, it was entirely automated, we were able to determine our own pricing structure, and outsource all our shipping needs. It can't get more automated than that. 

##Returns and Disputes

While the previous section cover the "happy path" of a potential transaction, there will always be cases of disputes and returns. Luckily, Printful and Stripe have tools to help alert us to such events. Stripe has an event that can be listened to, for when a charge is disputed by a bank. The best responses to such claims are often in need of a human touch, but luckily all our transaction data is easily on hand with Stripe, making this a speedy and easy process to handle. No digging for receipts necessary.

Returns are handled easily through Printful as well. In compliance with ecommerce standards, we provide a 30 day return policy for items damaged, or in poor condition upon arrival. If deemed the fault of Printful, they will cover the cost. We will encourage customers to contact us before trying to return for other reasons, as it could potentially lead to us having to take a financial hit, but it is important to understand that this is a necessary level of manual work.

##Moving Forward

We are still in the very fledgling stages of our business. There is a lot of work ahead of us. While we have development covered for the meantime, various other roles are needed in order to make sure our work is successful. Customer Service, copywriting, photography, models, and designers are among those that we are in need of in order to continue at a decent pace

