import axios from "axios";

class QuizService {
  getQuestions = (
    numQuestions: string = "10",
    category: string = "",
    difficulty: string = ""
  ) => {
    let queryString: string = "?amount=" + numQuestions;
    if (category) {
      queryString += "&category=" + category;
    }
    if (difficulty) {
      queryString += "&difficulty=" + difficulty;
    }
    return axios.get(`https://opentdb.com/api.php${queryString}`);
  };
}
export default new QuizService();
