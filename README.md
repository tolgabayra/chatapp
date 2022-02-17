# chatapp

cd /socketserver => npm install <br/>
cd /chatapp => npm install <br/>
-----------------------------
cd /socketserver => npm start <br/>
cd /chatapp => npm run watch <br/>
cd /chatapp => php artisan serve >>> running server ! <br/>


-----------docker------------ <br/>
Docker; Bizim kendi bilgisayarımızda container teknolojisini kullarak sanallaştırma yapmaya yarayan bir araçtır.
Biz dockerhub dan docker üzerinde çalıştırmak istediğimiz teknolojileri(iamges) 'docker pull postgres' komutu ile indirip kullanabiliyoruz.

Docker-compose.yml ile ayağa kaldırma ;
Öncellikle bir yml dosyası oluşturmalıyız. Docker compose ile ayağa kaldıracağımız uygulamanın configürasyonlarını tanımlayabiliyoruz. Yml dosyası key- value çiftlerinden oluşur <br/>

version : "3.7" => Dosyanın il satırında version olmak zorundadır.Ben 3.7 versiyonunu kullandım <br/>
services:  Bu satır çalışacak uygulamarı belirttiğimiz satırdır. <br/>

Sonra bu servisler için <i>image, ports, volumes, environment </i> parametrelerini kullarak configörasyon yapıyoruz.Ben volumes da kullandım. Bu volumes ler size birnevi loglama işlemi sunuyor container silinmesi halinde volumes ler silinmez ve tekrar volumess üzerinden container ayağa kaldırabilirsiniz.<br/>

Ve artık docker-compose dosyamızı ayağa kaldırmak için <i>docker-compose up </i> komutunu kullanıyoruz.Bu komut dosyayı çalıştırır ve servisleri ayağa kaldırır.<br/>

docker-compose down ise containerı sonlandırır.



