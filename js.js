$(document).ready(function(e)
			{
				$('#But').bind('click', function()
				{
						if($("#Type").val() != null && 
							$("#Lev").val() != null &&
							$("#Len").val() != "Квадратура (min 25)")
							{check = true;}
						else
							{check =  false;}
						if(parseInt($("#Len").val()) >= 25)
							{check1 = true;}
						else
							{check1 = false;}
						if(check == true && check1 == true)
						{
							if($("#Eror").text() != "")
								$("#Eror").text("");
							switch($("#Type").val()) {
								case "t1":
									switch($("#Lev").val()) {
										case "l1":
											var kof = 6100;
										break
										case "l2":
											var kof =8235;
										break
										case "l3":
											var kof = 10370;
										break
									}
								break
								case "t2":
									switch($("#Lev").val()) {
										case "l1":
											var kof = 6450;
										break
										case "l2":
											var kof =8705;
										break
										case "l3":
											var kof = 10965;
										break
									}
								break
								case "t3":
									switch($("#Lev").val()) {
										case "l1":
											var kof = 4100;
										break
										case "l2":
											var kof =5535;
										break
										case "l3":
											var kof = 6970;
										break
									}
								break
							}
							var sumot = Math.floor((parseInt($("#Len").val()) * kof) - (parseInt($("#Len").val()) * kof/10));
							var sumdo = Math.floor((parseInt($("#Len").val()) * kof) + (parseInt($("#Len").val()) * kof/15));
							alert("Примерная цена работы составит от "+sumot+" и до "+sumdo);
						}
						else
						{
							var textMessage = "";
							if(check == false)
							{
								textMessage += "Некоторые поля были не заполнены";
							}
							if(check1 == false)
								if(check == false && $("#Len").val() != "Квадратура (min 25)")
									{
										textMessage += " , слишком маленькая квадратура (мин 25)";
									}
								else if ($("#Len").val() != "Квадратура (min 25)")
									{
										textMessage += "слишком маленькая квадратура (мин 25)";
									}
							alert(textMessage);
						}
				});
			});