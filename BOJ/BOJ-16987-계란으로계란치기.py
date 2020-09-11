def crackEgg(n, grabbed,ans):
    global eggs,mx
    if grabbed == n+1:
        mx = max(mx,ans)
        return
    chk = 0
    for idx in range(1,n+1):
        if eggs[grabbed]["내구도"] > 0 and eggs[idx]["내구도"] > 0 and idx != grabbed:
            eggs[grabbed]["내구도"] -= eggs[idx]["무게"]
            eggs[idx]["내구도"] -= eggs[grabbed]["무게"]
            temp = (eggs[idx]["내구도"] <= 0) + (eggs[grabbed]["내구도"] <= 0)
            crackEgg(n,grabbed+1,ans+temp)
            chk += 1
            eggs[grabbed]["내구도"] += eggs[idx]["무게"]
            eggs[idx]["내구도"] += eggs[grabbed]["무게"]
    if chk == 0 :
        crackEgg(n,grabbed+1,ans)
    return


if __name__ == "__main__":
    mx = 0
    n = int(input())
    eggs = [{},]
    for _ in range(n):
        d, w = map(int,input().split())
        eggs.append({"무게": w, "내구도": d})

    crackEgg(n, 1,0)
    print(mx)