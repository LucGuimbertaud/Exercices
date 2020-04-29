<!doctype html>

<?php
//Tableau de notation classique => Notation américaine note de musique
$notes = array('do'=>'C', 'ré'=>'D', 'mi'=>'E', 'fa'=>'F', 'sol'=>'G', 'la'=>'A', 'si'=>'B');
$result = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST)){
        $result = "<p>Aucune note choisie</p>";
    }
    else{
        $note = key($_POST);
        $result = '<p>La note classique \' '.$note.' \' correspond à la note américaine \' '.$notes[$note].' \'.</p>';
    }
    echo $result;
    return;
}
?>

<h1>Correspondance des notes de musique classiques et anglaises</h1>
<form action="index.php" method="POST" id="form1">
    <fieldset>
        <legend>Correspondance classique -> anglaise</legend>
        <p>Choisissez une note :</p>
        <select name="note_classique" id="select">
            <option value="">Choix</option>
            <?php
            foreach($notes as $note_classique => $note_americaine){
                echo '<option value="'.$note_classique.'">'.$note_classique.'</option>';
            }
            ?>
        </select>
    </fieldset>
</form>



