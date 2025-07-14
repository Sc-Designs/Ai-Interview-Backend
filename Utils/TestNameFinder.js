import {Test} from "../models/Test_Model.js"

const testNameFinder = async(id)=>{
    const test = await Test.findById(id);
    return test.title;
}
export default testNameFinder;