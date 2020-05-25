import tkinter as kf
from tkinter import messagebox

top = kf.Tk()
def hello():
   messagebox.showinfo("Say Hello", "Hello World")

B1 = kf.Button(top, text = "Say Hello", command = hello)
B1.pack()

top.mainloop()