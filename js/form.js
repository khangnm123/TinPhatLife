document.querySelector('#submid_form').onsubmit = function(e){
    e.preventDefault();
    //Truy cap msg
    let msgOj = document.querySelector(".msg");
    // Reset
    msgOj.innerText = '';
    //Truy cap vao Html
    let fullNamOj = document.querySelector('input[name="fullname"]');
    let sdtoj = document.querySelector('input[name="Sdtoj"]');
    let truongoj = document.querySelector('input[name="truongoj"]');
    let loinhanoj = document.querySelector('input[name="loinhan"]');
    //lay gia tri nguoi dung nhap vao
    let Namefull = fullNamOj.value;
    let Phone = sdtoj.value;
    let School = truongoj.value;

    console.log(Phone);
    
    //Reset thong bao
    
    let requiredOj = document.querySelectorAll('.required');
    if (requiredOj.length > 0){
        requiredOj.forEach(function(item){
            item.innerText ='';
        })
    }
    let errors = {};
    if(Namefull.trim() == ""){
        errors['Namefull'] = 'Họ và tên không được để trống';
        fullNamOj.parentElement.querySelector('.required').innerText =  errors['Namefull'];
    }
    if(Phone.trim() == ""){
        errors['Phone'] = 'số điện thoại không được để trống';
        sdtoj.parentElement.querySelector('.required').innerText =  errors['Phone'];
    }
    if(School.trim() == ""){
        errors['School'] = 'Trường không được để trống';
        truongoj.parentElement.querySelector('.required').innerText =  errors['School'];
    }

    if(Object.keys(errors).length == 0 ){
        //khong co loi 
        let data = {
            'entry.144329271' : Namefull,
            'entry.519634432' : Phone,
            'entry.296102883' : School
        }
        alert("Thông tin của bạn đã được gửi")
        console.log(data);     
    }else{
        msgOj.innerHTML = '<div class="alert alert-danger text-center"> Vui lòng kiểm tra dữ liệu </div>'
    }
}