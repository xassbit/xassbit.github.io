import sys
import CVGenerator

possible_commands = {
    'generate' : CVGenerator.Website('skills').create_website()
}

if __name__ == "__main__":
    main_command = sys.argv[1]
    if main_command not in possible_commands.keys():
        print('Sorry, command not found.')
    possible_commands[main_command]
