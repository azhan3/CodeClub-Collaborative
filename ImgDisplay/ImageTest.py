

from tkinter import *
from tkinter import ttk

from PIL import Image


# Read image
img = Image.open('traced.png')

pixels = list(img.getdata())
Width, Height = img.size

pixels = [pixels[i * Width:(i + 1) * Width] for i in range(Height)]

imgDisplay = Tk()
imgDisplay.geometry(str(Width)+"x"+str(Height))
drawCanv = Canvas(imgDisplay,height=Height,width=Width)
for indH, i in enumerate(pixels):
    for indW, k in enumerate(i):
        if(k[0] != 255):
            drawCanv.create_line(indW,indH,indW+1,indH,fill="green")

drawCanv.pack()
imgDisplay.mainloop()
# Output Images
#img.show()
