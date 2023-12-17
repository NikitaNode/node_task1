
const connection=require("../mysql.js");

exports.getAll = async function(req, res) 
{
    let arr=[];
    await connection.query("SELECT * FROM article")
    .then(data=> {
        for (let i = 0; i < data[0].length; i++)
        {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err)
    });
    return arr;
};

exports.getOne = async function(req, res, idArticle){
    let arr=[];
    let sql = "SELECT * FROM article WHERE idArticle=?";
    filter=[req];
    await connection.query(sql, filter)
    .then(data=> {
        for (let i = 0; i < data[0].length; i++)
        {
            arr[i] = data[0][i];
        }
    })
    .catch(err => {
        console.log(err);
    });
    return arr;
}

exports.addOne = async function(req, res)
{
    let sql = "INSERT INTO article VALUES ('', ?, ?, ?)";
    filter = [req.titleArticle, req.textArticle, req.descriptionArticle];
    await connection.query(sql, filter)
    .then(data=> {
    })
    .catch(err=> {
        console.log(err);
    });
}

exports.editOne = async function(req, res){
    let arr = []
    let sql="UPDATE article SET titleArticle=?, textArticle=?, descriptionArticle=? WHERE idArticle=?";
    filter = [req.titleArticle, req.textArticle, req.descriptionArticle, +req.idArticle];
    await connection.query(sql, filter)
    .then(data=> {
        for (let i = 0; i < data[0].length;i++)
        {
            arr[i] = data[0][i];
        }
    })
    .catch(err=>{
        console.log("ERROR:" + err);
    });
    return arr;
}

exports.deleteOne = async function (req, res){
    console.log("model del");
    console.log(req);
    let sql = "DELETE FROM article WHERE idArticle=?";
    filter[req];
    await connection.query(sql, filter)
    .then(response => {
        console.log("ok");
    });
}