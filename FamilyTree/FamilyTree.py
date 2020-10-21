import tkinter as tk
from tkinter import filedialog
import csv
import openpyxl
import os
import pandas as pd
import numpy as np
import json

# FT imports ...
import ftMenu

def main():

    root = tk.Tk()
    # TODO Put set zoom back in when it works!!
    # Set Zoom limit to Max
    # root.state('zoomed')
    # TODO Remove following line when works
    root.geometry("900x400+10+10")

    # Set the status bar at the bottom of the  screen
    statusText="Initial Text"
    global status
    status = tk.Label(root, text=statusText, bd=1, relief=tk.SUNKEN, anchor=tk.W)
    status.pack(side=tk.BOTTOM, fill=tk.X)

    #app = ftMenu()
    #app.create_menu()
    mainwindow = tk.Frame()
    ftMenu.initUI(mainwindow)

    root.mainloop()

if __name__ == '__main__':
    main()