#!python
import re
import os
import csv
import settings
from htmldom import htmldom
from markdown import markdown


class Page:
    def __init__(self, title, menu, submenu, menu_order, submenu_order, submenu_name):

        if title in menu:
            self.md_path = os.path.join(settings.ROOT_DIR, '_md/{0}.md'.format(title))
            self.assets_path = '/'
            self.images_path = '/'
            self.index_path = 'index.html'
            self.is_submenu_page = False

        elif title in submenu:

            self.md_path = os.path.join(settings.ROOT_DIR, '_md/{0}/{1}.md'.format(submenu_name, title))

            self.assets_path = '../'
            self.images_path = '../'
            self.index_path = '../index.html'
            self.is_submenu_page = True

        self.menu = menu
        self.submenu = submenu
        self.menu_order = menu_order
        self.submenu_order = submenu_order
        self.title = title
        self.submenu_name = submenu_name

        head = self.generate_head()
        body = self.generate_body()

        self.html = "<!DOCTYPE HTML>\n\n<html>\n" + head + body + "</html>"

    def generate_body(self):

        header = self.generate_header()
        nav = self.generate_nav()
        article = self.generate_article()
        footer = Page.generate_footer()

        body = header + nav + article + footer
        body = Page.indent(body)
        body = '<body>\n' + body + '</body>'

        return body

    def generate_head(self):

        css_path = self.assets_path + 'main.css'
        icon_path = self.assets_path + 'favicon.png'

        # Costumize: author and title

        head_content = [
            """<meta charset="utf-8">""",
            """<meta name="viewport" content="width=device-width, initial-scale=1.0">""",
            """<link rel="icon" type="image/png" href="favicon.png">""",
            """<link rel="apple-touch-icon" href="{0}"/>""".format(icon_path),
            """<link rel="mask-icon" href="{0}" color="black" />""".format(icon_path),
            """<meta name="author" content="Daniel Matias Ferrer">""",
            """<title>Daniel Matias Ferrer - CV</title>""",
            """<link rel="stylesheet" type="text/css" media="screen" href="{0}">""".format(css_path)
        ]

        head = '<head>\n'
        for tag in head_content:
            head += '\t' + tag + '\n'
        head += '</head>'
        head = Page.indent(head)

        return head

    def generate_header(self):

        icon_path = self.assets_path + 'favicon.png'

        # Costumize: content of the header

        header_content = [
            """<h1 class="title"><a href="{0}">Daniel Matias Ferrer</a></h1>"""
                .format(self.index_path),
            """<h2 class="title"><a href="{0}">Curriculum&nbsp;Vitae<img src="{1}"></a></h2>"""
                .format(self.index_path, icon_path),
        ]

        header = '<header>\n'
        for tag in header_content:
            header += '\t' + tag + '\n'
        header += '</header>'
        header = Page.indent(header)

        return header

    def generate_nav(self):
        nav = htmldom.HtmlDom().createDom(
            """<div id="nav"><nav><ul class="menu"><li class="menu-icon"><a href="{0}">MENU</a></li><div class="menu-content"></div></ul></nav></div>""".format(
                self.index_path))

        if self.is_submenu_page:
            pre_menu_path = '../'
            pre_submenu_path = './'
        else:
            pre_menu_path = './'

            pre_submenu_path = './{0}/'.format(self.submenu_name)

        # Insert pages
        content = nav.find("div.menu-content")

        for page in self.menu_order:

            if page == self.title:
                li_class = ' class="active"'
            else:
                li_class = ''

            if page == self.submenu_name:

                if self.title in list(self.submenu_order):
                    li_class = ' class="active"'

                # Insert submenu content when "submenu" item is found
                content.append(
                    """
                    <li{0}>
                    <div class="submenu">
                    <a href="{1}{2}.html">{3}</a>
                    <div class="submenu-content">
                    <ul></ul>
                    </div>
                    </li>
                    """
                        .format(li_class, pre_menu_path, self.submenu_name, self.submenu_name.capitalize())
                )
                subcontent = nav.find("div.submenu-content ul")
                for page in list(self.submenu_order):
                    page_title = self.submenu[page]
                    subcontent.append(
                        """<li><a href="{0}{1}.html">{2}</a></li>"""
                            .format(pre_submenu_path, page, page_title)
                    )

            else:
                # Insert menu content
                page_title = self.menu[page]
                content.append(
                    """<li{0}><a href="{1}{2}.html">{3}</a></li>""".format(li_class, pre_menu_path, page, page_title))

        nav_html = nav.find('div[id="nav"]').html()
        nav_html = Page.indent(nav_html)

        return nav_html

    def add_images(self, html):
        for line in html.splitlines():
            if re.search('<img', line):
                match = re.search('src="(.*)"', line)
                image_path = self.images_path + match.group(1)
                new_line = re.sub(str(match.group(1)), image_path, line)
                html = re.sub(line, new_line, html)
        return html

    def generate_article(self):

        with open(self.md_path, 'r') as f:
            md_content = f.read()

        # Remove first line (title)
        md_content = md_content[md_content.find('\n') + 1:]

        article_html = markdown(md_content)
        article_html = Page.indent(article_html)
        article_html = "<article>\n" + article_html + "</article>\n"
        article_html = Page.indent(article_html)

        article_html = self.add_images(article_html)

        return article_html

    def generate_footer():

        # Customize: content of footer

        footer = """<footer>\n<span>&#169; 2015 Daniel Matias Ferrer</span>\n</footer>"""
        footer = Page.indent(footer)
        return footer

    def indent(string):
        string = re.sub('\n', '\n\t', string)
        string = '\t' + string + '\n'
        return string


class Website():
    def __init__(self, submenu_name):

        self.submenu_name = submenu_name
        self.menu_path = settings.ROOT_DIR
        self.submenu_path = os.path.join(settings.ROOT_DIR, self.submenu_name)
        self.menu = Website.create_menu(os.path.join(settings.ROOT_DIR, '_md'))
        self.submenu = Website.create_menu(os.path.join(settings.ROOT_DIR, '_md/{0}'.format(self.submenu_name)))
        Website.create_menu(os.path.join(settings.ROOT_DIR, '_md/{0}'.format(self.submenu_name)))
        self.menu_order = Website.list_stored_pages(os.path.join(settings.ROOT_DIR, '_nav/menu.csv'))
        self.submenu_order = Website.list_stored_pages(os.path.join(settings.ROOT_DIR, '_nav/submenu.csv'))

    def list_stored_pages(csv_file):

        number_rows = Website.number_rows(csv_file)

        pages = list(range(number_rows))
        with open(csv_file) as f:
            reader = csv.DictReader(f)
            for row in reader:
                pages[int(row['Order'])] = row['Title']

        return pages

    def number_rows(csv_file):
        with open(csv_file) as f:
            reader = csv.DictReader(f)
            number_lines = 0
            for row in reader:
                number_lines += 1

        return number_lines

    def create_menu(directory):

        files = os.listdir(directory)
        menu_files = {}

        for path in files:
            if path[-3:] == '.md':
                with open(os.path.join(directory, path), 'r') as f:
                    menu_files[path[:-3]] = f.readline().strip()

        return menu_files

    def create_website(self):

        def check_equal(a_dict, a_list):
            eq = set(a_dict.keys()) == set(a_list)
            eq = eq and (len(a_dict.keys()) == len(a_list))
            return eq

        # 'a' is True if all menu pages in menu.csv
        a = check_equal(self.menu, self.menu_order)

        # 'b' is True if all submenu pages in submenu.csv
        b = check_equal(self.submenu, self.submenu_order)

        c = a and b

        if c:
            self.generate()
        else:
            if not a:
                self.create_navigation_csv(for_submenu=False)
            if not b:
                self.create_navigation_csv(for_menu=False)
            print('Set the order of pages and rerun script.')

    def generate(self):

        print("MENU PAGES GENERATED:\n")

        for page in list(self.menu_order):
            html = Page(page, self.menu, self.submenu, self.menu_order, self.submenu_order, self.submenu_name).html
            with open('{0}{1}.html'.format(self.menu_path, page), 'w') as f:
                f.write(html)
            print(self.menu[page])

        print("\nSUBMENU PAGES GENERATED:\n")

        for page in list(self.submenu_order):
            html = Page(page, self.menu, self.submenu, self.menu_order, self.submenu_order, self.submenu_name).html
            with open('{0}/{1}.html'.format(self.submenu_path, page), 'w') as f:
                f.write(html)
            print(self.submenu[page])

        print("\n\nFINISHED GENERATING WEBSITE\n\n")

    def create_navigation_csv(self, for_menu=True, for_submenu=True):

        def create_csv(file_path, menu_list):
            fields = ['Title', 'Order']
            with open(file_path, 'w') as f:
                csv_writer = csv.DictWriter(f, fieldnames=fields)
                csv_writer.writeheader()
                i = 0
                for page in (menu_list):
                    csv_writer.writerow({'Title': page, 'Order': i})
                    i += 1

        if for_menu:
            create_csv(os.path.join(settings.ROOT_DIR, '_nav/menu.csv'), self.menu.keys())
        if for_submenu:
            create_csv(os.path.join(settings.ROOT_DIR, '_nav/submenu.csv'), self.submenu.keys())

        print('Menu and submenu .csv files create.')


if __name__ == "__main__":
    website = Website('skills')
    website.create_website()
