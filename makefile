#MakeFile to build Gun Death Data Visualization
# 

# Put your user name below:

USER= shurbertj


CC= g++
 
#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++14

RM= /bin/rm -f

all: PutHTML


PutHTML:
	cp gun.html /var/www/html/class/softdev/$(USER)/GunDeathProject/
	cp gun.css /var/www/html/class/softdev/$(USER)/GunDeathProject/
	cp guns.js /var/www/html/class/softdev/$(USER)/GunDeathProject/
	cp guns2.js /var/www/html/class/softdev/$(USER)/GunDeathProject/
	cp guns3.js /var/www/html/class/softdev/$(USER)/GunDeathProject/

	cp interactive_data.csv /var/www/html/class/softdev/$(USER)/GunDeathProject/


	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/GunDeathProject/

clean:
	rm -f *.o  GunDeathProject
