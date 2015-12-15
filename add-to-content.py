def main():
    """Open a file for writing"""
    
    f = open("/Users/xassbit/Desktop/repos/xassbit.github.io/index.html","r")
    
    openTag = "<article>"
    closeTag = "</article>"
    
    content = f.read()
    
    first = content.find(openTag)
    last = content.find(closeTag)
    
    first += 10
    last -= 1
    
    myString = "\t<h1>Bla bla bla</h1>"
    
    newContent = content[:first] + myString + content[last:]
    
    f.close()
    
    f = open("/Users/xassbit/Desktop/repos/xassbit.github.io/index.html","w+")
    
    f.write(newContent)
    
    f.close
        
if __name__ == "__main__":
    main()
    