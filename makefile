#MakeFile to build Gun Death Data Visualization
# 

# Put your user name below:
<<<<<<< HEAD
USER= powellae
=======
USER= ambrosend
>>>>>>> febb8277ca31ab6494db623e510e8786f4dfd0dc

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
<<<<<<< HEAD
	cp CSVparser/papaparse.min.js /var/www/html/class/softdev/$(USER)/GunDeathProject/
	cp fulldata.csv /var/www/html/class/softdev/$(USER)/GunDeathProject/
=======
	cp interactive_data.csv /var/www/html/class/softdev/$(USER)/GunDeathProject/
>>>>>>> febb8277ca31ab6494db623e510e8786f4dfd0dc

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/class/softdev/$(USER)/GunDeathProject/

clean:
	rm -f *.o  GunDeathProject
