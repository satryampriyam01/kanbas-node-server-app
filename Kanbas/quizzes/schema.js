import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
    correct: { type: Boolean, default: false },
    answer: String,
  });

const attemptSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    count: Number,
})

const questionSchema = new mongoose.Schema({
    title : String,
    type : {type : String, default : "Multiple_Choice" },
    points : Number,
    question : String,
    choices : [choiceSchema]
})
const quizSchema = new mongoose.Schema(
  {
    Title: String,
    Description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    Points: Number,
    AssignMentGroup : {type : String, default : "Quiz"},
    DueDate :  Date,
    AvaliableFrom : Date,
    AvailableUtil : Date,
    Published : {type: Boolean, default : false},
    Type : {type : String, default : "Graded"},
    AccessCode : {type : String, default : ""},
    AssignmentGroup: String,
    ShuffleAsnwers: {type : Boolean, default : true},
    TimeLimit: Number,
    MultipleAttempts: {type : Boolean, default : false},
    LockQuestionsAfterAnswering: {type : Boolean, default : false},
    OneQuestionAtATime: {type : Boolean, default : True},
    ShowAnswersAfterCompletion : {type : Boolean, default : True},
    Webmcam : Boolean,
    HowManyAttempts : {type : Number, default : 1},
  },
  { collection: "quizzes" }
);
export default schema;