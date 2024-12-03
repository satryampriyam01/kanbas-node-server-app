
import model from "./model.js";
export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}

export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
 }
 export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }
 

 // import Database from "../Database/index.js";
// export function enrollUserInCourse(userId, courseId) {
//   const enrollment = {
//     _id: Date.now().toString(),
//     user: userId,
//     course: courseId,
//   };
//   Database.enrollments.push(enrollment);
//   return enrollment;
// }
// export function unenrollUserFromCourse(userId, courseId) {
//   const { enrollments } = Database;
//   Database.enrollments = enrollments.filter(
//     (e) => !(e.user == userId && e.course == courseId)
//   );
// }
// export function findEnrollmentsForUser(userId) {
//   const enrollments = Database.enrollments.filter((e) => e.user === userId);
//   return enrollments;
// }