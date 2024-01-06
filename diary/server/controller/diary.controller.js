const DiaryModel = require ("../models/diary.model")

    exports.submitDiary = async (request , response ) => {
        try{
            let result = await DiaryModel.submitDiary(request.body)
            response.json({message:"successful"} , 200)
        } catch (error) {
            response.json({message:"error"} , 400 )
        }

    exports.getAllDiaries = async (request , response ) => {
        try{
            let result = await DiaryModel.getAllDiaries() ;
            response.json({result} , 200 )
        } catch(error) {
            response.json({message:"error"}, 400 )
        }
    }

    exports.getDiaryById = async (request , response ) => {
        try{
            let result = await DiaryModel.getDiaryById(request.params.id) ;
            response.json({result} , 200 )
        } catch(error) {
            response.json({message:"error"}, 400 )
        }
    }

    exports.editDiaryText = async (request , response ) => {
        try{
            let result = await DiaryModel.editDiaryText(request.body.text,request.params.id) ;
            response.json({message:"successfuly"} , 200 )
        } catch(error) {
            response.json({message:"error"}, 400 )
        }
    }

    exports.deleteText = async (request , response ) => {
        try{
            let result = await DiaryModel.deleteText(request.params.id) ;
            response.json({message:"Done successfuly"} , 200)
        } catch (error) {
            response.json({message:"error"} , 400)
        }
    }


}