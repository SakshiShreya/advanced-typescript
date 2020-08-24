// import { HasEmail, HasPhoneNumber } from "./1-basics";

//== FUNCTIONS ==//

// (1) function arguments and return values can have type annotations
// function sendEmail(to: HasEmail): { recipient: string; body: string } {
//   return {
//     recipient: `${to.name} <${to.email}>`, // Sakshi <sakshi@example.com>
//     body: "You're pre-qualified for a loan!"
//   };
// }

// (2) or the arrow-function variant
// const sendTextMessage = (
//   to: HasPhoneNumber
// ): { recipient: string; body: string } => {
//   return {
//     recipient: `${to.name} <${to.phone}>`,
//     body: "You're pre-qualified for a loan!"
//   };
// };

// (3) return types can almost always be inferred
// function getNameParts(contact: { name: string }) {
//   const parts = contact.name.split(/\s/g); // split @ whitespace
//   if (parts.length < 2) {
//     throw new Error(`Can't calculate name parts from name "${contact.name}"`);
//   }
//   return {
//     first: parts[0],
//     middle:
//       parts.length === 2
//         ? undefined
//         : // everything except first and last
//           parts.slice(1, parts.length - 2).join(" "),
//     last: parts[parts.length - 1]
//   };
// }

// (4) rest params work just as you'd think. Type must be array-ish
// const sum = (...vals: number[]) => vals.reduce((sum, x) => sum + x, 0);
// console.log(sum(3, 4, 6)); // 13

// (5) we can even provide multiple function signatures
// "overload signatures"
// function contactPeople(method: "email", ...people: HasEmail[]): void;
// function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// "function implementation"
// function contactPeople(
//   method: "email" | "phone",
//   ...people: (HasEmail | HasPhoneNumber)[]
// ): void {
//   if (method === "email") {
//     (people as HasEmail[]).forEach(sendEmail);
//   } else {
//     (people as HasPhoneNumber[]).forEach(sendTextMessage);
//   }
// }

// ✅ email works
// contactPeople("email", { name: "foo", email: "" });

// ✅ phone works
// contactPeople("phone", { name: "foo", phone: 12345678 });

// 🚨 mixing does not work
// contactPeople("email", { name: "foo", phone: 12345678 });

export default {};
