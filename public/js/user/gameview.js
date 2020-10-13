$(document).ready(()=>{
    $.ajax({
        url: '/api/getGame/'+window.location.pathname.split('/')[2],
        type: 'get',
        success: (data)=>{
            $('#username').text(data.username)
            game = data.data;
            
            $('#game').text(game.game);
            $('#publisher').text(game.publisher);
            $('#desc').text(game.desc);
            $('#genre').text(game.genre);
            $('#site').attr('href', game.site);
            duar = game.game_id;
            }
        
        
    })
})
var duar
$("#save").click(()=>{
    reg= /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
    if(reg.test($("#addsite").val())){
        alert("wrong format");
        return
    }
    jsonData = {
        "name": $("#addgame").val(),
        "desc": $("#adddesc").val(),
        "genre": $("#addgenre").val(),
        "site": $("#addsite").val(),
        "id": duar
    };
    if (jsonData["name"] == ""){
        alert("name must be filled out");
        return
    }
    $.ajax({
        url: '/api/update',
        type: 'put',
        data: jsonData,
        success: (data) => {
            if(data.status=='OK'){
                location.reload()
            }
            alert(data.message)
        }
    });
})
$("#delete").click(()=>{
    jsonData = {
        "id": duar
    };
    if (jsonData["id"] == ""){
        alert("wrong id");
        return
    }
    $.ajax({
        url: '/api/update',
        type: 'delete',
        data: jsonData,
        success: (data) => {
            if(data.status=='OK'){
                location.reload()
            }
            alert(data.message)
        }
    });
})