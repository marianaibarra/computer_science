#include <stdio.h>
#define MAXLINE 1000 /* maximum input line size */

/* prints longest input line */
void main(){
    int len; /* current line lenght*/
    int max; /* maximum length so far */
    char line[MAXLINE]; /* current input line */
    char longest[MAXLINE]; /* longest line saved here */

    max = 0;

    while ((len = get_line(line, MAXLINE)) > 0)
        if(len > max){
            max = len;
            copy(longest, line);
        }

    if(max > 0)
        printf("%s", longest);
}

/* get_line: read a line into s, return length */
int get_line(s, lim)
char s[];
int lim;
{
    int c,i;

    for (i = 0; i < lim - 1 && (c = getchar()) != EOF && c != '\n'; i++)
        s[i] = c;
    if(c == '\n'){
        s[i] = c;
        ++i;
    }
    s[i] = '\0';
    return i;
}

/* copy: copy 'from' into 'to'; assume to is big enough */
void copy(to, from)
char to[];
char from[];
{
    int i;

    i = 0;
    while ((to[i] = from[i]) != '\0')
        i++;
    
}