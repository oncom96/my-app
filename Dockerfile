#Menentukan Node.js versi LTS sebagai base image 
FROM node:lts-alpine

#Menentukan direktori kerja di dalam container 
WORKDIR /usr/src/app

#Menyalin file app.js ke dalam container
COPY . .

#Menentukan perintah untuk menjalankan aplikasi saat container dimulai
CMD ["node", "app.js"]

