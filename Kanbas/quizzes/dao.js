import Database from "../Database/index.js";
import model from "./model.js";
export function findQuizzesForCourse(courseId) {
    //const {assignments} = Database
    //return assignments.filter((assignment) => assignment.courseId === courseId);
    return model.find({ course : courseId });
}
export function createQuiz(quiz){
    delete quiz._id
    return model.create(quiz);
    //const {assignments} = Database;
    //const newAssignment = {...assignment, _id : Date.now().toString()};
    //Database.assignments = [...Database.assignments,newAssignment]
    //return newAssignment
}
export function deleteQuiz(quizId){
    //const {assignments} = Database
    //Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId )
    return model.deleteOne({ _id:quizId });
}
export function updateQuiz(quizId, quizUpdates){
    //const {assignments} = Database
    //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    //Object.assign(assignment,assignmentUpdates);
    //return assignment
    return model.updateOne({ _id: quizId }, quizUpdates);
}
export function findAllQuizzes() {
    return model.find();
}

export async function publish(quizId) {
    model.updateOne({ _id: quizId }, {published: true});
}
export async function unpublish(quizId) {
    model.updateOne({ _id: quizId }, {published: false});
}

export async function incrementUserAttempt(quizId, userId) {
    const result = await QuizModel.updateOne(
      { _id: quizId, "attempts.user": userId },
      {
        $inc: { "attempts.$.count": 1 },
        $setOnInsert: { "attempts.$.user": userId }
      },
      { upsert: true, new: true }
    ).exec();
  
    if (result.nModified === 0) {
      // If no document was modified, it means the user hasn't attempted yet, so we add a new record
      return QuizModel.findByIdAndUpdate(
        quizId,
        { $push: { attempts: { user: userId, count: 1 } } },
        { new: true }
      ).exec();
    }
  
    return QuizModel.findById(quizId).exec();
  }

