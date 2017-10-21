FROM debian:stretch

#Update distribution
RUN apt-get update
RUN apt-get dist-upgrade -y
RUN apt-get update

#Install crowdin and its dependencies
RUN apt-get -y install wget gnupg2 default-jdk
RUN wget https://artifacts.crowdin.com/repo/deb/crowdin.deb -O crowdin.deb
RUN dpkg -i crowdin.deb

COPY build.sh crowdin.yml /app/
VOLUME /translations
