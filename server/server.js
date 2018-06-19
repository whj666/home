const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const multer = require('koa-multer');
const bodyParser = require('koa-bodyparser');

//login
const findUser = require('./app/login/findUser.js');
const saveUser = require('./app/login/saveUser.js');
const {checkUser, checkUserName} = require('./app/login/action.js');

//table
const tableSaveUser = require('./app/table/saveUser.js');
const tableFindUser = require('./app/table/findUser.js');
const deleteUser = require('./app/table/deleteUser.js');

const upload = multer({dest: 'uploads/'});

app.use(serve('.'));

//使用ctx.body解析中间件 (当POST请求的时候，中间件koa-bodyparser解析POST传递的数据，并显示出来)
app.use(bodyParser());

app.use(route.post('/api/uploadUserPhoto', upload.single('photo'), async (ctx, next) => {  
    try {
        await upload.single('photo')
    } catch (e) {
        console.log(e);
    }
}));

// app.use(async (ctx) => {
//     if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/get' && ctx.method === 'GET'){
//         let request = ctx.request;
//         let query = request.query;
//         ctx.body = {flag: true, data: [query]};
//     }else if(ctx.url === '/api/post' && ctx.method === 'POST'){
//         let postData = ctx.request.body;
//         ctx.body = {flag: true, data: [postData]};
//     }else if(ctx.url === '/api/login' && ctx.method === 'POST'){
//         //登陆
//         let postData = ctx.request.body;
//         let userArr = await findUser({userName: postData.userName});

//         if(checkUser(userArr, postData)){
//             ctx.body = {flag: true};
//         }else{
//             ctx.body = {flag: false, message: "账号密码错误！"};
//         }
//     }else if(ctx.url === '/api/register' && ctx.method === 'POST'){
//         //注册
//         let postData = ctx.request.body;
//         let userArr = await findUser({userName: postData.newUserName});

//         if(!checkUserName(userArr, postData)){
//             if(await saveUser(postData)){
//                 ctx.body = {flag: true, message: "注册成功！"};
//             };
//         }else{
//             ctx.body = {flag: false, message: "账号已经存在！"};
//         }
//     }else if(ctx.url.substring(0, ctx.url.indexOf("?")) === '/api/getTableData' && ctx.method === 'GET'){
//         //查询
//         let request = ctx.request;
//         let query = request.query;
//         let userArr = await tableFindUser(query);
//         if(userArr){
//             ctx.body = {flag: true, data: userArr};
//         }else{
//             ctx.body = {flag: false, message: "查询失败！"};
//         };
//     }else if(ctx.url === '/api/saveTableEdit' && ctx.method === 'POST'){
//         //新建&编辑保存
//         let postData = ctx.request.body;
//         let res = await tableSaveUser(postData);
//         if(res){
//             ctx.body = {flag: true, message: "保存成功！"};
//         }else{
//             ctx.body = {flag: false, message: "保存失败！"};
//         }
//     }else if(ctx.url === '/api/deleteTableData' && ctx.method === 'POST'){
//         //删除
//         let postData = ctx.request.body;
//         let res = await deleteUser(postData);
//         if(res.ok){
//             ctx.body = {flag: true, message: "删除成功！"};
//         }else{
//             ctx.body = {flag: false, message: "删除失败！"};
//         };
//     }
// })

app.listen(8080, () => {
    console.log('sever is starting at port 8080');
})