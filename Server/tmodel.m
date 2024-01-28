function Temp = myfunc(I)

% V = input('V ? ');
% I = input('I ? ');
V = 153.33 .* I - 2.93;

g = [1.9904   ; -1.8817 ;    2.7904   ;-1.7562 ; -10.4341;   -5.5681];

T=g(1).*(V- g(2)).^g(3).*(I-g(4)).^g(5) + g(6);

a = T*(1-0.07);
b = T*(1+0.07);

c = 3;

Z1 = (b-a)*rand(1,c ) + a;


Z2 = (b-a)*rand(1,c + 1) + a;
Z1 = sort(Z1);
Z2 = sort(Z2, 'descend');

Temp = [Z1  Z2];
% Values of Temperature 
Q = V.*I;
L = 0.5;
d = 0.038;
A = pi*L*d;

Ta = [ 32.1 ; 32 ; 31.7; 28 ; 28 ; 31.6 ; 32; 33];
h = Q ./ (A .* (T- 33));

end


