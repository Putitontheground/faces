
// FaceMap class - holds all informaiton about one mapped
// face and is able to draw itself.
 
// other variables can be in here too
// these control the colors used

const bg_color = [225, 206, 187];
const fg_color = [151, 102, 52];
const stroke_color = [95, 52, 8];
const head_width = 3.5;
const head_height = 4.5;

  // Draw a face with position lists that include:
  // chin, right_eye, left_eye, right_eyebrow, left_eyebrow
  // bottom_lip, top_lip, nose_tip, nose_bridge, 
    
function Face() {

  // these are state variables for a face
  // (your variables may be different

  this.eyelid = 0;
  this.lipheight = 0;
  this.blackeye = 0;
  this.redeye = 0;
  this.wrinkles = 0;
  this.chin = 20;
  this.hairX = 0;
  this.hairY = 0;
  this.hairColour = ["#090806", "#D6C4C2", "#E6CEA8", "#B55239", "#3B3024", "#A7856A"];

  // Draw a face with position lists that include:
  // chin, right_eye, left_eye, right_eyebrow, left_eyebrow
  // bottom_lip, top_lip, nose_tip, nose_bridge, 

this.draw = function(positions) {
    
    //average of eye points
    let pos_left = average_point(positions.left_eye)
    let pos_right = average_point(positions.right_eye)

    //face
    let pos_c1 = positions.chin[3];
    let pos_c2 = positions.chin[8];
    let pos_c3 = positions.chin[13];
    let pos_c4 = positions.chin[8];
    
    //face points
    let pos_p1 = positions.chin[0];
    let pos_p2 = positions.chin[16];
    let pos_p3 = positions.chin[11];
    let pos_p4 = positions.chin[5];

    //mouth curves
    let mouth_leftc = positions.top_lip[0];
    let mouth_topc = positions.top_lip[3];
    let mouth_rightc = positions.top_lip[6];
    let mouth_botc = positions.bottom_lip[9];

    //mouth points
    let mouth_left = positions.top_lip[0];
    let mouth_bot = positions.top_lip[3];
    let mouth_right = positions.top_lip[6];
    let mouth_top = positions.bottom_lip[9];

    //nose points
    let nose_top = positions.nose_bridge[0];
    let nose_mid = positions.nose_bridge[2];
    let nose_tip = positions.nose_tip[2];
    let nose_bot1 = positions.nose_tip[4];
    let nose_bot2 = positions.nose_tip[0];
    let nostril1 = positions.nose_tip[3];
    let nostril2 = positions.nose_tip[1];

    let nose_side = positions.nose_bridge[3];

    //cheekbones
    let cheekbones1 = positions.chin[1];
    let cheekbones2 = positions.chin[2];
    let cheekbones3 = positions.chin[3];

    let cheekbones4 = positions.chin[15];
    let cheekbones5 = positions.chin[14];
    let cheekbones6 = positions.chin[13];

    //forehead wrinkles
    let forehead1 = positions.left_eyebrow[0];
    let forehead2 = positions.left_eyebrow[2];
    let forehead3 = positions.nose_bridge[0];
    let forehead4 = positions.right_eyebrow[2];
    let forehead5 = positions.right_eyebrow[4];


    //face
    stroke(240);
    strokeWeight(.05);
    fill(240);

    //forehead
    curve(pos_c1[0], pos_c1[1]+15, pos_p1[0], pos_p1[1], pos_p2[0], pos_p2[1], pos_c2[0], pos_c2[1]+15);
    //cheeks
    curve(pos_c2[0]-2, pos_c2[1]-5, pos_p2[0], pos_p2[1], pos_p3[0], pos_p3[1], pos_c3[0]-2, pos_c3[1]+5);
    curve(pos_c4[0]+2, pos_c4[1]+5, pos_p4[0], pos_p4[1], pos_p1[0], pos_p1[1], pos_c1[0]+2, pos_c1[1]-5);
    //chin
    curve(pos_c3[0], pos_c3[1]-this.chin/2, pos_p3[0], pos_p3[1], pos_p4[0], pos_p4[1], pos_c4[0], pos_c4[1]-this.chin/2);

    //inner face
    fill(240);
    // strokeWeight(.03);
    // stroke(240);
    noStroke();
    beginShape();
    vertex(pos_p1[0]+0.03,pos_p1[1]-0.03);
    vertex(pos_p2[0]+0.03,pos_p2[1]-0.03);
    vertex(pos_p3[0]+0.03,pos_p3[1]+0.03);
    vertex(pos_p4[0]-0.03,pos_p4[1]+0.03);
    vertex(pos_p1[0]-0.03,pos_p1[1]+0.03);
    endShape();

    //cheekbones
    //doesn't draw them if the face is turned too far one way or the other
    stroke(190); 
    strokeWeight(.05);
    noFill();

    if (nose_side[0] < 0.1 && -0.1) {

    beginShape();
      curveVertex(cheekbones1[0]+this.cb1, cheekbones1[1]);
      curveVertex(cheekbones1[0]+this.cb1, cheekbones1[1]);
      curveVertex(cheekbones2[0]+this.cb2, cheekbones2[1]);
      curveVertex(cheekbones3[0]+this.cb2, cheekbones3[1]);
      curveVertex(cheekbones3[0]+this.cb2, cheekbones3[1]);
    endShape();

    beginShape();
      curveVertex(cheekbones4[0]-this.cb1, cheekbones4[1]);
      curveVertex(cheekbones4[0]-this.cb1, cheekbones4[1]);
      curveVertex(cheekbones5[0]-this.cb2, cheekbones5[1]);
      curveVertex(cheekbones6[0]-this.cb2, cheekbones6[1]);
      curveVertex(cheekbones6[0]-this.cb2, cheekbones6[1]);
    endShape();
    }

    else if (nose_side[0] > 0.2) {

    beginShape();
      curveVertex(cheekbones1[0]+this.cb1, cheekbones1[1]);
      curveVertex(cheekbones1[0]+this.cb1, cheekbones1[1]);
      curveVertex(cheekbones2[0]+this.cb2, cheekbones2[1]);
      curveVertex(cheekbones3[0]+this.cb2, cheekbones3[1]);
      curveVertex(cheekbones3[0]+this.cb2, cheekbones3[1]);
    endShape();
    }

    else if (nose_side[0] > -0.2) {

    beginShape();
      curveVertex(cheekbones4[0]-this.cb1, cheekbones4[1]);
      curveVertex(cheekbones4[0]-this.cb1, cheekbones4[1]);
      curveVertex(cheekbones5[0]-this.cb2, cheekbones5[1]);
      curveVertex(cheekbones6[0]-this.cb2, cheekbones6[1]);
      curveVertex(cheekbones6[0]-this.cb2, cheekbones6[1]);
    endShape();
    }

    //mouth
    fill(255,190,190);
    //i can't remember why this stroke is 0,0 but it does something that fixes the mouth
    stroke(0,0);
    strokeWeight(25);
    curve(mouth_leftc[0], mouth_leftc[1]-this.lipheight/2, mouth_left[0], mouth_left[1], mouth_top[0], mouth_top[1], mouth_topc[0], mouth_topc[1]-this.lipheight/2);
    curve(mouth_topc[0], mouth_topc[1]-this.lipheight/2, mouth_top[0], mouth_top[1], mouth_right[0], mouth_right[1], mouth_rightc[0], mouth_rightc[1]-this.lipheight/2);
    curve(mouth_rightc[0], mouth_rightc[1]+this.lipheight, mouth_right[0], mouth_right[1], mouth_bot[0], mouth_bot[1], mouth_botc[0], mouth_botc[1]+this.lipheight);
    curve(mouth_botc[0], mouth_botc[1]+this.lipheight, mouth_bot[0], mouth_bot[1], mouth_left[0], mouth_left[1], mouth_leftc[0], mouth_leftc[1]+this.lipheight);

    //inner mouth
    fill(255,190,190);
    beginShape();
      vertex(mouth_left[0],mouth_left[1]);
      vertex(mouth_top[0],mouth_top[1]);
      vertex(mouth_right[0],mouth_right[1]);
      vertex(mouth_bot[0],mouth_bot[1]);
    endShape();

    //mouth hole
    fill(0);
    beginShape();
      vertex(mouth_left[0],mouth_left[1]);
      vertex(mouth_top[0],mouth_top[1]);
      vertex(mouth_right[0],mouth_right[1]);
      vertex(mouth_bot[0],mouth_bot[1]);
    endShape();

    //nose
    //moves the nose tip left or right depending on the nose position
    fill(240);
    stroke(0);
    strokeWeight(.08);

    if (nose_side[0] < 0) {
      beginShape();
        curveVertex(nose_top[0], nose_top[1]);
        curveVertex(nose_top[0], nose_top[1]);
        curveVertex(nose_mid[0], nose_mid[1]);
        curveVertex(nose_tip[0], nose_tip[1]);
        curveVertex(nose_bot1[0], nose_bot1[1]);
        curveVertex(nose_bot1[0], nose_bot1[1]);
      endShape();
    }

    else if (nose_side[0] > 0) {
      beginShape();
        curveVertex(nose_top[0], nose_top[1]);
        curveVertex(nose_top[0], nose_top[1]);
        curveVertex(nose_mid[0], nose_mid[1]);
        curveVertex(nose_tip[0], nose_tip[1]);
        curveVertex(nose_bot2[0], nose_bot2[1]);
        curveVertex(nose_bot2[0], nose_bot2[1]);
      endShape();
    }

    // eyes outer
    fill(0);
    noStroke();
    ellipse(pos_left[0], pos_left[1], 1*this.blackeye, 1*this.blackeye);
    ellipse(pos_right[0],pos_right[1], 1*this.blackeye, 1*this.blackeye);
    //eyes inner
    fill(255);
    ellipse(pos_left[0], pos_left[1], .70, .70);
    ellipse(pos_right[0],pos_right[1], .70, .70);

    //pupils
    fill(255,0,0);
    noStroke();
    ellipse(pos_left[0], pos_left[1], .15*this.redeye, .15*this.redeye);
    ellipse(pos_right[0],pos_right[1], .15*this.redeye, .15*this.redeye);


    //eyelids bottom
    if (this.eyelid == 0) {
        fill(100);
        stroke(100);
        strokeWeight(0.01);
        arc(pos_left[0], pos_left[1], .70, .70, 15, 165, CHORD);
        arc(pos_right[0],pos_right[1], .70, .70, 15, 165, CHORD);
    }

    //eyelids top
    else if (this.eyelid == 1) {
        fill(100);
        stroke(100);
        strokeWeight(0.01);
        arc(pos_left[0], pos_left[1], .70, .70, 200, -15, CHORD);
        arc(pos_right[0],pos_right[1], .70, .70, 200, -15, CHORD);
    }

    //hair
    push();
    fill(this.hairColour[this.hairColour_choice]);
    noStroke();
    scale(0.1,0.1);
    translate(this.hairX,this.hairY);
    push();
    translate(5,-15);

    //left hair
    beginShape();
      vertex(-6.5, -11);
      quadraticVertex(-0, -17 , -10, -19);
      quadraticVertex(-13, -20 , -16, -17);
      quadraticVertex(-20, -12 , -22, -17);
      quadraticVertex(-23, -6 , -12, -8);
    endShape();
    pop();

    //right hair
    push();
    translate(-5,-15);
    beginShape();
      vertex(6.5, -11 );
      quadraticVertex(0, -17 , 10, -19);
      quadraticVertex(13, -20 , 16, -17);
      quadraticVertex(21, -12 , 22, -17);
      quadraticVertex(23, -6 , 12, -8);
      
    endShape();
    pop();
    pop();

    //forehead line
    stroke(190); 
    strokeWeight(.05);
    noFill();

    beginShape();
      curveVertex(forehead1[0], forehead1[1]-.4);
      curveVertex(forehead1[0], forehead1[1]-.4);
      curveVertex(forehead2[0], forehead2[1]-this.wrinkles);
      curveVertex(forehead3[0], forehead3[1]-.5);
      curveVertex(forehead3[0], forehead3[1]-.5);
    endShape();

    beginShape();
      curveVertex(forehead3[0], forehead3[1]-.5);
      curveVertex(forehead3[0], forehead3[1]-.5);
      curveVertex(forehead4[0], forehead4[1]-this.wrinkles);
      curveVertex(forehead5[0], forehead5[1]-.4);
      curveVertex(forehead5[0], forehead5[1]-.4);
    endShape();

}

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {

    this.eyelid = Math.floor(map(settings[0], 0, 100, 0, 1));
    this.lipheight = map(settings[1], 0, 100, .1, 3);
    this.blackeye = map(settings[2], 0, 100, 1, 1.5);
    this.redeye = map(settings[3], 0, 100, 1, 2);
    this.wrinkles = map(settings[4], 0, 100, 0.01, 0.7);
    this.chin = map(settings[5], 0, 100, 10, 30);
    this.hairX = map(settings[6], 0, 100, 0.5, -2);
    this.hairY = map(settings[7], 0, 100, 0.5, 8);
    this.cb1 = map(settings[8], 0, 100, 0, 0.5);
    this.cb2 = map(settings[9], 0, 100, .3, 0.6);
    this.hairColour_choice = Math.floor(map(settings[10],0,100,0,5));
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(1);

    settings[0] = map(this.eyelid, 0, 1, 0, 100);
    settings[1] = map(this.lipheight, .1, 3, 0, 100);
    settings[2] = map(this.blackeye, 1, 1.5, 0, 100);
    settings[3] = map(this.redeye, 1, 2, 0, 100);
    settings[4] = map(this.wrinkles, 0.01, 0.7, 0, 100);
    settings[5] = map(this.chin, 10, 30, 0, 100);
    settings[6] = map(this.hairX, 0.5, -2, 0, 100);
    settings[7] = map(this.hairY, 0.5, 8, 0, 100);
    settings[8] = map(this.cb1, 0, 0.5, 0, 100);
    settings[9] = map(this.cb2, .3, 0.6, 0, 100);
    settings[10] = map(this.hairColour_choice,0,5,0,100);

    return settings;
  }
}

// given an array of [x,y] points, return the average
function average_point(list) {
  var sum_x = 0;
  var sum_y = 0;
  var num_points = 0;
  for(var i=0; i<list.length; i++) {
    sum_x += list[i][0];
    sum_y += list[i][1];
    num_points += 1; 
  }
  return [sum_x / num_points, sum_y / num_points];
}

