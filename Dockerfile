FROM debian:stretch

#Update distribution
RUN apt-get update
RUN apt-get dist-upgrade -y
RUN apt-get -y install curl unzip
RUN apt-get update

#Install crowdin and its dependencies
RUN apt-get -y install gnupg2 default-jdk
RUN curl -o crowdin.deb https://artifacts.crowdin.com/repo/deb/crowdin.deb 
RUN dpkg -i crowdin.deb

#Install App
COPY app /app
VOLUME /translations
