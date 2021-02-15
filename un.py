#uniqo
arr = [-4, -1, 0, 2, 2, 2, 2, 4, 5, 6, 6, 6]
uq = []
def uniqo(a):
    first = 0
    second = 1
    for i in range(len(a)-1):
        if a[first] != a[second]:
            uq.append(a[first])
            first = second
            second +=1
        elif second == len(a)-1:
            uq.append(a[first])
        else:
            second +=1
        
    return uq
