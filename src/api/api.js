import axios from 'axios';

// TODO: .envファイルから読み込めないため、ここで指定
const URL_BASE = "http://localhost:3000/"

const getAnswers = async (subjectId) => {
    const url = URL_BASE + "database/" + subjectId;
    try {
        const res = await axios.get(url);
        const answers = res.data;
        return answers;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const postAnswer = async (subjectId, answer) => {
    const url = URL_BASE + "database";
    const reqBody = {
        subjectId: subjectId,
        answer: answer
    }
    try {
        const res = await axios.post(url, reqBody);
        return res.status === 201
    } catch (error) {
        console.log(error);
        return false
    }
}

export { getAnswers, postAnswer }