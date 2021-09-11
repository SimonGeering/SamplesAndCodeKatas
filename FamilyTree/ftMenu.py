import tkinter as tk
from tkinter import filedialog

# class ftMenu(tk.Frame):
#     ''' Set up main menu '''
#     def __init__(self, ):
#         super().__init__()

#         self.initUI()

def initUI(self: tk.Frame):
    #TODO replace self with mainwindow
    self.master.title("Family Tree")

    menubar = tk.Menu(self.master)
    self.master.config(menu=menubar)

    filemenu = tk.Menu(menubar)
    # create a File pulldown menu, and add it to the menu bar

    filemenu = tk.Menu(menubar, tearoff=0)
    filemenu.add_command(label="New", command=onFileNew)
    filemenu.add_command(label="Open TSV file", command=onFileOpen)
    filemenu.add_command(label="Open TSV to JSON", command=onFileTSVJSON)
    filemenu.add_command(label="Save", command=onFileSave)
    filemenu.add_command(label="Save as...", command=onFileSaveAs)
    filemenu.add_command(label="Close", command=onFileClose)
    filemenu.add_separator()
    filemenu.add_command(label="Exit", command=onFileExit)
    menubar.add_cascade(label="File", menu=filemenu)

    # create an Edit pulldown menu and add.
    editmenu = tk.Menu(menubar, tearoff=0)
    editmenu.add_command(label="Cut", command=onEditCut)
    editmenu.add_command(label="Copy", command=onEditCopy)
    editmenu.add_command(label="Paste", command=onEditPaste)
    menubar.add_cascade(label="Edit", menu=editmenu)

    # create the Selection pulldown menu and add.
    selectmenu = tk.Menu(menubar, tearoff=0)
    selectmenu.add_command(label="Select All", command=onSelectAll)
    filemenu.add_separator()
    selectmenu.add_command(label="Select Options", command=onSelectOptions)
    menubar.add_cascade(label="Selection", menu=selectmenu)

    # create the View pulldown menu and add.
    viewmenu = tk.Menu(menubar, tearoff=0)
    viewmenu.add_command(label="Open New Window", command=onViewNewFrame)
    viewmenu.add_separator()
    viewmenu.add_command(label="View Json File", command=onViewJson)
    viewmenu.add_separator()
    viewmenu.add_command(label="View Options", command=onViewOptions)
    menubar.add_cascade(label="View", menu=viewmenu)

    # create the Help pulldown menu and add.
    helpmenu = tk.Menu(menubar, tearoff=0)
    helpmenu.add_command(label="About", command=onHelpAbout)
    menubar.add_cascade(label="Help", menu=helpmenu)


# Menu Methods .....
# File menu

def onFileNew(self):
    updateStatus("This is File New menu")

def onFileOpen(self):
    updateStatus("Select the TSV Data File to open ....")
    # filename = filedialog.askopenfilename(initialdir = "/Development/Python/FamilyTree/",
    #                                   title = "Select a File",
    #                                   filetypes = (("TAB files",
    #                                                 "*.tsv*"),
    #                                                ("all files",
    #                                                 "*.*")))
    
    # #
    # # Check status of "filename"
    # #
    # fileSelected = fileStatus(filename)
    # if fileSelected:
    #     updateStatus("Opened file:- " + filename)
    #     # DataForm()
    #     # ReadFile(filename)
    #     names = loadTSVfile(filename)
    #     print("Length of data list = " + (str(len(names))))
    #     length_list = [len(element) for row in names for element in row]
    #     column_width = 15 # max(length_list)
    #     for row in names:
    #         row = "".join(element.ljust(column_width + 2) for element in row)
    #         print(row)
    #     #print(names)
    #     #print(*names, sep = "\n") 
    #     updateStatus("Names from " + filename + " have been loaded")
    # else:
    #     updateStatus("No file selected to open.")

def onFileTSVJSON(self):
    updateStatus("Opening TSV Names file and writing JSON file")

    # # Function to convert a CSV to JSON
    # # Takes the file paths as arguments
    # def make_json(csvFilePath, jsonFilePath):
    #     # create a dictionary
    #     data = {}

    #     # Open a csv reader called DictReader
    #     with open(csvFilePath, encoding='utf-8', newline = '') as csvf:
    #         csvReader = csv.DictReader(csvf, delimiter='\t')

    #         # Convert each row into a dictionary
    #         # and add it to data
    #         for rows in csvReader:

    #             # If column arcId contains data, then carry out the following functions, to gererate unique key:
    #             # Example data
    #             #   =HYPERLINK("https://www.familysearch.org/ark:/61903/1:1:X7BR-PSZ","ark:/61903/1:1:X7BR-PSZ")
    #             # Extract the right most 8 characters, not including the " or ) and make this the primary key
    #             # 1) Find length L
    #             # 2) startIndex = L - 10 (Don't forget index starts at 0, length starts at 1)
    #             # 3) endIndex = L - 2 (This is the first character index NOT to be included)
    #             fullArkId = rows['arkId']
    #             lenfullArkId = len(str(fullArkId))
    #             # check to see that arkId has some length i.e. > 10
    #             if lenfullArkId > 10:
    #                 startIndex = lenfullArkId - 10
    #                 endIndex = lenfullArkId - 2
    #                 uniqueID = str(fullArkId)[startIndex:endIndex]
    #             else:
    #                 uniqueID = "SourceURL"
    #             key = uniqueID
    #             print("Key is - " + key)
    #             # also pull back arcId
    #             print("The arkID is " + str(fullArkId))
    #             data[key] = rows

    #     # Open a json writer, and use the json.dumps()
    #     # function to dump data
    #     with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
    #         jsonf.write(json.dumps(data, indent=4))

    # # Driver Code

    # # Temp (static) paths for the two files
    # csvFilePath = r'sampleData.tsv'
    # jsonFilePath = r'NamesOut.json'

    # # Call the make_json function
    # updateStatus("Creating the JSON NamesOt file .......")
    # make_json(csvFilePath, jsonFilePath)
    # updateStatus("JSON file - NamesOut has been created.")

def onFileSave(self):
    updateStatus("This is File Save menu")

def onFileSaveAs(self):
    updateStatus("This is File Save As menu")

def onFileClose(self):
    updateStatus("This is File Close menu")

def onFileExit(self):
    self.quit()

# Edit Pulldown Menu

def onEditCut(self):
    updateStatus("This is Edit Cut menu")

def onEditCopy(self):
    updateStatus("This is Edit Copy menu")

def onEditPaste(self):
    updateStatus("This is Edit Paste menu")

# Selection pulldown menu
'''
The Selection Controls are to allow different methods of selecting individual records
'''
def onSelectAll(self):
    updateStatus("This is Selection Select All menu")

def onSelectOptions(self):
    updateStatus("This is Selection Select Options menu")

# View pulldown menu
def onViewNewFrame(self):
    print("This is View Display Window menu")
    # Open up new working frame ....
    # TODO
    dataManagerFrame = tk.Frame(self.master)
    dataManagerFrame.pack()
    # see if this appears
    button = tk.Button(dataManagerFrame, 
                text="QUIT", 
                fg="red",
                command=quit)
    button.pack(side=tk.LEFT)
    # It does but QUIT quits everything!!!!
    updateStatus("This is View Display Window menu")

def onViewJson(self):
    updateStatus("View Jason file using printHistory....")
#        printHistory()
    updateStatus("")

def onViewOptions(self):
    updateStatus("This is View Options menu")

# Help pulldown menu
def onHelpAbout(self):
    updateStatus("This is Help About menu")

def updateStatus(newText):
    ''' Update the bottom status line text with newText ''' 
    print("Status called" + str(newText))
    # global status
    # status['text']=newText
