function solution(n) {
    var x;
    var y;
    var z;
    var w;
    var r=0;
    var f=n;
   if(n==1)
       {
           return n;
       }
    else
    {
        
            z=n*2-1;
            r=z;
            for(y=1;y<n;y++)
                {
                    w=1;
                    x=((z-(w))*w);
                    if(x!=z)
                    {
                        r=r+x;
                        w++;
                    }
                }
    }
    console.log(r);
        return r;
}
