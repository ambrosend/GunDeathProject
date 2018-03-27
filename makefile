#MakeFile to build Gun Death Data Visualization
# 

# Put your user name below:
USER= ambrosend

CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: PutHTML


PutHTML:
	cp gun.html /var/www/html/class/softdev/$(USER)/Project2/
	cp gun.css /var/www/html/class/softdev/$(USER)/Project2/
	cp guns.js /var/www/html/class/softdev/$(USER)/Project2/


	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/GunDeathProject/
	
clean:
	rm -f *.o  GunDeathProject