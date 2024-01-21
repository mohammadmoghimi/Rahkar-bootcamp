const DiaryModel = require ("../models/diary.model")

const submitDiary = async (request , response ,next ) => {
    try{
        await new DiaryModel().submitDiary(request.body)
        response.json({message:"successful"} , 200)
    } catch (error) {
        next(error) ;
    }
}

    const getAllDiaries = async (request , response ,next ) => {
        try{
            let result = await new DiaryModel().getAllDiaries() ;
            response.json({result} , 200 )
        } catch(error) {
            next(error) ;
        }
    }

    const getDiaryById = async (request , response , next ) => {
        try{
            let result = await new DiaryModel().getDiaryById(request.params.id) ;
            response.json({result} , 200 )
        } catch(error) {
            next(error);
        }
    }

    const editDiaryText = async (request , response , next ) => {
        try{
            let result = await DiaryModel.editDiaryText(request.body.text,request.params.id) ;
            response.json({message:"successfuly"} , 200 )
        } catch(error) {
            next(error);
        }
    }

    const deleteDiaryById = async (request , response , next ) => {
        try{
            let result = await DiaryModel.deleteDiaryById(request.params.id) ;
            response.json({message:"Done successfuly"} , 200)
        } catch (error) {
            next(error);
        }
    }

    module.exports = {
        submitDiary,
        getAllDiaries,
        getDiaryById,
        editDiaryText,
        deleteDiaryById,
      };
      